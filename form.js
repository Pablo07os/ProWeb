function calcularDiarias() {

    var suiteSelect = document.getElementById("suite");
    var valorDiaria = 0;
  
    if (suiteSelect.value === "standard") {
      valorDiaria = 100;
    } else if (suiteSelect.value === "exclusive") {
      valorDiaria = 200;
    } else if (suiteSelect.value === "luxo") {
      valorDiaria = 300;
    }
  
  
    var numDiarias = parseFloat(document.getElementsByName("ndd")[0].value);
  
    // Calcular o subtotal das diárias
    var subtotal = valorDiaria * numDiarias;
  
    // Verificar se serviços adicionais foram selecionados e somar ao subtotal
    var servicos = document.getElementsByName("servicos");
    var valorServicos = 0;
  
    for (var i = 0; i < servicos.length; i++) {
      if (servicos[i].checked) {
        if (servicos[i].value === "lavanderia") {
          valorServicos += 120;
        } else if (servicos[i].value === "refeicoes") {
          valorServicos += 500;
        } else if (servicos[i].value === "cityTour") {
          valorServicos += 100;
        }
      }
    }
  
    // Calcular o total final
    var total = subtotal + valorServicos;
  
    // Exibir o total na label "Valor total"
    document.getElementById("total").value = total.toFixed(2);
  }