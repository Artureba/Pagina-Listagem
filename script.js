import arquivo from "./arquivo.json" assert { type: "json" };

const name = JSON.stringify(arquivo.professor.name);
const mat = JSON.stringify(arquivo.professor.materia);
const preco = JSON.stringify(arquivo.professor.preco);
const text = JSON.stringify(arquivo.professor.bio);

const nameWithoutQuotes = name.replace(/["]/g , "");
const matWithoutQuotes = mat.replace(/(["])/g , "");
const precoWithoutQuotes = preco.replace(/(["])/g , "");
const textWithoutQuotes = text.replace(/(["])/g , "");


document.getElementById('name').innerHTML = nameWithoutQuotes;
document.getElementById('mat').innerHTML = matWithoutQuotes;
document.getElementById('preco').innerHTML = precoWithoutQuotes;
document.getElementById('text').innerHTML = textWithoutQuotes;