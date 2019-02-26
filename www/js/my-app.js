function Aplication(){
	



// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
   // $$('#telefone').mask('(00) 0000-0000');
});



$$('.cadastro .cadastrar').on('click', function () {
	var poste = $$('.cadastro input[name = "poste"]').val();
    var nome = $$('.cadastro input[name = "nome_solicitante"]').val();
    var celular = $$('.cadastro input[name = "celular"]').val();
    var endereco = $$('.cadastro input[name = "endereco"]').val();
    var numero = $$('.cadastro input[name = "numero"]').val();
    var referencia = $$('.cadastro input[name = "referencia"]').val();
    var bairro = $$('.cadastro select[name = "bairros"]').val();
    var chklista =  $$('.cadastro input[name = "problemas"]:checked').val();
            
   
            

           // $$.support.cors = true,
            $$.ajax({
                url: "http://confresa.gilp.com.br/cadastrar/app",
                 crossDomain: false,
                method: 'POST',
                dataType: 'json',
                data: {
                    acao: 'aplicativo',
                    poste: poste,
                    nome: nome,
                    celular: celular,
                    endereco: endereco,
                    numero: numero,
                    referencia: referencia,
                    bairro: bairro,
                    problema: chklista
                },    
                headers: {'X-Requested-With': 'XMLHttpRequest'},  	
                success: function (data) {
                	  if(data.users.result == true){
                		  //mainView.router.loadPage('index.html');
                	
                		  myApp.alert(data.users.msg, ['ALERTA!']);
                		 
                	     
                	          
                					
                	       
                		
                		  
                 /*         //redireciona o usuario para pagina
                          $("#usuario_nome").html(json.users.dados.nome);
                          //$("#usuario_profissao").html(json.profissao);
                          var titelliste = json.users.dados.proponentes;

                          for (var i = 0; i < titelliste.length; i++) {
                       	    var select = document.getElementById("select-choice-a");
                       	    var option = document.createElement("option");
                       	    option.text = titelliste[i].proponente;
                       	    option.value = titelliste[i].cnpj;
                       	    select.add(option);
                       	}
                          
                          $.mobile.changePage("#selecmunicipio", {
                          transition : "slidefade"
                           });*/

                       }else{
                    	   myApp.alert("Erro ao cadastrar, ligue 66 3564-2237!", ['ALERTA!']);
                       }

                     
                	
                	   
                	
                	
                   
                }

            });
            
            
            
            
            
            
         
});


	
    /*var poste = $$('.cadastro input[name = "poste"]').val();
    var nome = $$('.cadastro input[name = "nome_solicitante"]').val();
    var celular = $$('.cadastro input[name = "celular"]').val();
    var endereco = $$('.cadastro input[name = "endereco"]').val();
    var numero = $$('.cadastro input[name = "numero"]').val();
    var referencia = $$('.cadastro input[name = "referencia"]').val();
    var bairro = $$('.cadastro select[name = "bairros"]').val();
    var chklista =  $$('.cadastro input[name = "problemas"]:checked').val();
    
   
    myApp.alert('Poste: ' + poste + 'Nome: ' + nome + '</br>Celular: ' + celular + '</br>Endereco: ' + endereco + ' nº: ' + numero + '</br>Referência: ' + referencia + '</br>Bairro: ' + bairro + '</br>Problemas: ' + chklista, function () {
       //myApp.closeModal('.login-screen');
});*/

$$('#teste').on('click', function () {
	
	var consulta = $$('input[name = "consulta"]').val();
	  $$.ajax({
          url: "http://confresa.gilp.com.br/cadastrar/consulta",
          crossDomain: false,
          method: 'POST',
          dataType: 'json',
          data: {
              acao: 'aplicativo',
              consulta: consulta
          },    
          headers: {'X-Requested-With': 'XMLHttpRequest'},  	
          success: function (data) {
          	  if(data.notificacaos.result == true){
          		  //mainView.router.loadPage('index.html');
          		var myList = myApp.virtualList('.virtual-list', {
          		    // Array with items data
          		    items: [
          		        {
          		            title: data.notificacaos.protocolo,
          		            reclamante: data.notificacaos.reclamente,
          		            criado: data.notificacaos.criado,
          		            situacao: data.notificacaos.situacao,
          		            
          		        },
          		       
          		    ],
          		    // Custom render function to render item's HTML
          		    renderItem: function (index, item) {
          		        return '<div class="item-content">' +
          		                  '<div class="item-inner"><div class="item-title">' + item.title +
          		                  
          		                  '<br/><b>Reclamante: </b>'+ item.reclamante + '<br/>' +
          		                  '<b>Criado em: </b>' + item.criado + '<br/>'+ 
          		                  '<b>Situação Atual: </b>' + item.situacao + '</div></div>';
          		        
          		    }
          		});      
          		  
                  

                 }else{
                	 var myList = myApp.virtualList('.virtual-list', {
               		    // Array with items data
               		    items: [
               		        {
               		            title: '20180505450454',
               		            reclamante: 'Hudson Kennedy de Sousa',
               		            criado: '19/11/2018 às 16:15',
               		            situacao: 'Concluído',
               		            
               		        },
               		       
               		    ],
               		    // Custom render function to render item's HTML
               		    renderItem: function (index, item) {
               		        return '<div class="item-content">' +
               		                  '<div class="item-inner"><div class="item-title">Protocolo não localizado!</div></div>';
               		        
               		    }
               		});      
                 }

          }

      });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*var consulta = $$('input[name = "consulta"]').val();
   
           // $$.support.cors = true,
            $$.ajax({
                url: "http://confresa.gilp.com.br/cadastrar/consulta",
                 crossDomain: false,
                method: 'POST',
                dataType: 'json',
                data: {
                    acao: 'aplicativo',
                    consulta: consulta
                },    
                headers: {'X-Requested-With': 'XMLHttpRequest'},  	
                success: function (data) {
                	  if(data.users.result == true){
                		  //mainView.router.loadPage('index.html');
                	
                		  myApp.alert(data.users.msg, ['ALERTA!']);

                		  
                          //redireciona o usuario para pagina
                          $("#usuario_nome").html(json.users.dados.nome);
                          //$("#usuario_profissao").html(json.profissao);
                          var titelliste = json.users.dados.proponentes;

                          for (var i = 0; i < titelliste.length; i++) {
                       	    var select = document.getElementById("select-choice-a");
                       	    var option = document.createElement("option");
                       	    option.text = titelliste[i].proponente;
                       	    option.value = titelliste[i].cnpj;
                       	    select.add(option);
                       	}
                          
                          $.mobile.changePage("#selecmunicipio", {
                          transition : "slidefade"
                           });

                       }else{
                    	   myApp.alert("Erro ao cadastrar, ligue 66 3564-2237!");
                       }

                }

            });*/


});

}
Aplication ();