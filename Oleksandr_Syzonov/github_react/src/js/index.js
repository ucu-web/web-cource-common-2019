import { File } from "../components/File/File";
import { map, filter } from "ramda";
import { create_paragraph } from "../components/Readme_paragraph/create_paragraph";
import { listIntoTree, listIntoTreeList } from "../helpers/json_to_tree";
import { Filesystem } from "../helpers/Filesystem";

import {
  renderRepositoryDescription,
  renderRepositoryName
} from "../components/Repository/render";
const renderFile = async () => {
  const repoId = 7;
  const repo = await (await fetch(
    `http://127.0.0.1:5000/repositories/${repoId}`
  )).json();
  renderRepositoryDescription(
    repo,
    document.querySelector(".Repository__description")
  );
  renderRepositoryName(repo, document.querySelector(".Repository-title"));
  let filesystem = new Filesystem(
    listIntoTree(listIntoTreeList(repo.files)),
    document.querySelector(".Repository__files")
  );
};

renderFile();
