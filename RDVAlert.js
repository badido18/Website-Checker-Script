const request = require('request'); 
const open = require('open');
console.log('checking ...  ');
var html1, html2;

const verif = async () =>{
	await request('https://algeria.blsspainvisa.com/book_appointment.php',(error,response,html)=>{
	    if(!error){
		html1 = html;
		setInterval(() => {
		    await request('https://algeria.blsspainvisa.com/book_appointment.php',(error, response, body) => {
		    if (!error) {
			html2 = body;
			if (html1 != html2) {
			    console.log("changed");
			    open('https://algeria.blsspainvisa.com/book_appointment.php');
			html1=html2;

			}
		    }
		});
	    },1000);
		}   
	}); 
}

verif()
