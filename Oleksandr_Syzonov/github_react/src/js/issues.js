import {renderRepositoryDescription, renderRepositoryName} from "../components/Repository/render";

const render = async () => {
    const repoId = 8;
    const repo = await (await fetch(`http://127.0.0.1:5000/repositories/${repoId}`)).json();
    console.log(repo);
    renderRepositoryName(repo, document.querySelector(".Repository-title"));
};

render();