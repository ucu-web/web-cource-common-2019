import { File } from "../components/File/File";
import { map , filter} from "ramda";
import { create_paragraph } from "../components/Readme_paragraph/create_paragraph";
import {renderRepositoryDescription, renderRepositoryName} from "../components/Repository/render"
const renderFile = async () => {
  const repoId = 8;
  const repo = await (await fetch(`http://127.0.0.1:5000/repositories/${repoId}`)).json();
  console.log(repo);
  renderRepositoryDescription(repo, document.querySelector(".Repository__description"));
  renderRepositoryName(repo, document.querySelector(".Repository-title"));
  const filesContainer = document.querySelector(".Repository__files");
  let files = await (await fetch("http://127.0.0.1:5000/files/")).json();
  console.log(files);
  files = filter((x) => (parseInt(x["repository_id"]) === repoId), files);
  console.log(files);
  files = map(x => File(x), files);
  map(x => {
    filesContainer.appendChild(x);
  }, files);
  let readmeContainer = document.querySelector(".Readme__description");
  let paragraphs = await (await fetch("http://127.0.0.1:5000/readme/")).json();
  paragraphs = map(x => create_paragraph(x), paragraphs);
  map(x => (readmeContainer.innerHTML += x), paragraphs);
};

renderFile();
