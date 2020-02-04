import fetch from 'node-fetch';

/* cspell: disable */
const TOKEN = '';
const REPO_ID = '';
const EXCLUDES = Object.freeze([]);
const TYPESCRIPT_REGEX = /\Wtsc -p\W/;
const BABEL_REGEX = /\Wbabel src\W/;
const BUILDS = 3000;
const PAGE = 10;
/* cspell: enable */

async function main() {
  const travis = await auth(TOKEN);
  const repo = await travis.repo(REPO_ID);
  const stats = {
    error: 0,
    failed: 0,
    checked: 0,
    typeScript: 0,
    babel: 0,
    vanilla: 0,
    excluded: 0
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const builds: any[] = [];
  for (let i = 0; i < BUILDS; i++) {
    if (builds.length === 0) {
      console.log(`Getting ${PAGE} more builds...`);
      builds.push(...(await repo.builds(i, PAGE)));
    }
    const build = builds.shift();
    const print = msg => console.info(`Build ${build.id + 1} (${i}/${BUILDS}): ${msg}`);
    try {
      console.log(stats);
      if (build.state !== 'passed') {
        stats.failed++;
        print('Failed');
        continue;
      }
      const jobId = build.jobs[0].id;
      const log = await travis.log(jobId);
      const exclude = EXCLUDES.find(regex => regex.test(log));
      if (exclude) {
        print(`Excluded (${exclude})`);
        stats.excluded++;
      } else if (TYPESCRIPT_REGEX.test(log)) {
        print('TypeScript');
        stats.typeScript++;
      } else if (BABEL_REGEX.test(log)) {
        print('Babel');
        stats.babel++;
      } else {
        print('VanillaJS');
        stats.vanilla++;
      }
      stats.checked++;
    } catch (ex) {
      stats.error++;
      print(`Error ("${ex.message}")`);
    }
  }
  console.info('FINISHED');
  console.log(stats);
}

async function auth(token: string) {
  return {
    async repo(id: string) {
      return {
        async builds(offset: number, limit: number) {
          return (await call(`repo/${id}/builds?offset=${offset}&limit=${limit}`, token)).builds;
        }
      };
    },
    async log(id: string) {
      return (await call('job/' + id + '/log', token)).content as string;
    }
  };
}

async function call(path: string, token: string) {
  const response = await fetch('https://api.travis-ci.com/' + path, {
    method: 'GET',
    headers: {
      'Travis-API-Version': '3',
      'User-Agent': 'ES-TABRIS-STATS',
      'Authorization': 'token ' + token
    }
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return await response.json();
}

main().catch(console.error);
