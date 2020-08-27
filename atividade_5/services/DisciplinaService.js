const DisciplinaModel = require('../models/DisciplinaModel');

let disciplinas = [{id: 0, nome: "ICC", curso: "CC", capacidade: 50}, {id: 1, nome: "PAA", curso: "CC, SI, ES", capacidade: 35}];
let id = 2;

class DisciplinaService {
  
  static register(data){
    let disciplina = new DisciplinaModel(
      id++,
      data.nome,
      data.curso,
      data.capacidade
    );
    disciplinas.push(disciplina);
    return disciplina;
  }

  static list() {
    return disciplinas;
  }

  static update(id, data) {
    if(disciplinas.find(disciplina => disciplina.id == id)) {
      disciplinas.find(disciplina => disciplina.id == id).nome = data.nome;
      disciplinas.find(disciplina => disciplina.id == id).curso = data.curso;
      disciplinas.find(disciplina => disciplina.id == id).capacidade = data.capacidade;
      return disciplinas.find(disciplina => disciplina.id == id);
    }
    return null;
  }

  static delete(id) {
    if(disciplinas.find(disciplina => disciplina.id == id)) {
      let pos = disciplinas.map(function(e) { return e.id; }).indexOf(id);
      disciplinas.splice(pos, 1);
      return true;
    }
    return false;
  }

  static retrieve(id) {
    console.log(id);
    console.log(disciplinas.find(disciplina => disciplina.id == id))
    if(disciplinas.find(disciplina => disciplina.id == id)) {
      return disciplinas.find(disciplina => disciplina.id == id);
    }
    return {};
  }
}

module.exports = DisciplinaService;