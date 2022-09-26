  // <reference types="cypress" />


 describe("prueba número 2 ", () => {
   let informacion;

   before("conexion con el json ", () => {
     cy.fixture("UserAndTask").then((data) => {
       informacion = data;
     });
   });

   beforeEach("entrar la loguen ", () => {
     cy.visit("");
     cy.get("#registertoggle").dblclick();
     cy.xpath("//input[@name='user']").type(informacion.datosDelUsuario.usuario)
     cy.xpath("//input[@name='pass']").type(informacion.datosDelUsuario.contraseña)
     cy.xpath("//button[text()='Log in']").click()
     cy.get('#todolistlink').click()
   });

   it("ingresar 5 tareas", () => {
    cy.get('#task').type(informacion.tareas.tarea1)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea2)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea3)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea4)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea5)
    cy.get('#sendTask').click()  
   });

   it('Verificar que existan los botones All, Completed, Active y Remove all', () => {
    cy.get('#all').should("exist")
    cy.xpath('//button[@id="completed"]').should("exist")
    cy.xpath('//button[contains(@id,"act")]').should("exist")
    cy.get("button").contains("Remove all").should("exist")
   });

   it('Agregar dos tareas y completarlas y eliminar la segunda tarea completada', () => {
    cy.get('#task').type(informacion.tareas.tarea1)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea2)
    cy.get('#sendTask').click()
    cy.get("p").contains("Comer el desayuno").click()
    cy.get("p").contains("Bañarse con agua fria").click()
    cy.xpath("//p[text()='Bañarse con agua fria']//following-sibling::button").click()
   });

   it('Agregar 2 tareas y eliminar la primera tarea', () => {
    cy.get('#task').type(informacion.tareas.tarea3)
    cy.get('#sendTask').click()
    cy.get('#task').type(informacion.tareas.tarea4)
    cy.get('#sendTask').click()
    cy.xpath("//p[text()='Dormir en la sala']//following-sibling::button").click()
   });

 });