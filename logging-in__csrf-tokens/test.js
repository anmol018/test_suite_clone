/// <reference types="Cypress" />
const str1 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomnumbers = () => Math.floor(Math.random() * 10000000);
const lrandomnumbers = () => Math.floor(Math.random() * 10000);	
const mrandomnumbers = () => Math.floor(Math.random() * 1000);
const srandomnumbers = () => Math.floor(Math.random() * 100);
let tname;
let tvalue;
let tltv;
let tproperties;
let tarea;
let mvalue;
let toccupancy;
let tgri;
let tyield;
let tconnections;
let tcestrev;
let ttestrev;
let compn;
let compalias;
let compph;
let compwebsite;
let contfname;
let contlname;
let contemail;
let contph;
	describe('My First Test', function () {
		
		
						
	Cypress.Commands.add('loginByCSRF', (csrfToken) => {
	cy.request({
    method: 'POST',
    url: '/login', // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      emailid: 'mritunjay.sinha@oxanepartners.com',
      password: 'Oxane@1234',
	  _csrf: csrfToken // insert this as part of form body
    }
	})
  })
  beforeEach(function(){
	cy.viewport(1366, 768)
	//cy.clear('caches')
  })
  tname = `test${randomnumbers()}`
  tvalue = `${randomnumbers()}`
  tltv = `${srandomnumbers()}`
  tproperties = `${srandomnumbers()}`
  tarea = `${lrandomnumbers()}`
  mvalue = `${randomnumbers()}`
  toccupancy = `${srandomnumbers()}`
  tgri = `${srandomnumbers()}`
  tyield = `${srandomnumbers()}/1000000`
  tconnections = `${srandomnumbers()}`
  tcestrev = `${lrandomnumbers()}`
  ttestrev = `${lrandomnumbers()}`
  compn = `Finance Management${randomnumbers()}`
  compalias = `MSF${srandomnumbers()}`
  compph = `${randomnumbers()}`
  compwebsite = `www.${str1()}.com`
  contfname = `Eddie${srandomnumbers()}`
  contlname = `Brown${srandomnumbers()}`
  contemail = `${str1()}@testmail.com`
  contph = `${randomnumbers()}`		
			
    it('Post New Transaction Creation, Searching it on Pipeline Module', function(){		
		cy.request('/')
      .its('body')
      .then((body) => {
        // we can use Cypress.$ to parse the string body
        // thus enabling us to query into it easily
        const $html = Cypress.$(body)
        const csrf  = $html.find("input[name=_csrf]").val()

            cy.loginByCSRF(csrf)
            .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.include("Dashboard")
		    //Navigation to Pipeline Module
			cy.visit('fund#!/pipeline/report')
			cy.get('.mr10 > .flex > .flex-1')
			.should('be.visible').type(tname)
			cy.wait(2000)
			cy.get('.clickable').click()
			cy.get('[ui-sref="underwriting.deal-info"]').click()
			cy.get('.btn').click()
			cy.get('.flex > .icon-menu').click()
			//Saving Transaction Again 
			cy.contains('.btn', 'Save').click()
			cy.wait(2000)
			cy.visit('fund#!/pipeline/report')
			})
		})
	})
})