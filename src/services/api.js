import axios from "axios";

import {langColors} from './config'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export const getLangsFrom = (reposList) => {
  let LangsOfRepos = reposList.map((repo)=> repo.langs).reduce((accumulator, langs)=> {
    accumulator[langs] = accumulator[langs] + 1 || 1
    return accumulator
  }, {});

  delete LangsOfRepos.null;

  LangsOfRepos = Object.keys(LangsOfRepos).map((langs)=> ({
    name: langs,
    count: LangsOfRepos[langs],
    color: langColors[langs.toLocaleLowerCase()],
  })).sort((a,b) => b.count - a.count);

  return LangsOfRepos;
};