// Backend ()
class Gtin_dictionary {
    static dictionary = {}
    static add_dictionary (gcp, page) {
         Gtin_dictionary.dictionary[""+gcp]={"gcp":""+gcp,"page":page}
         return this;
    }

    static is_gtin_registered (gtin) {
        var registered = false;
        for (var i=13; i>0; i--) {
            registered|=Gtin_dictionary.dictionary.hasOwnProperty((""+gtin).substr(1,i));
        }
        return registered;
    }

    static get_url (gtin) {
        for (var i=13; i>0; i--) {
            var gcp = (""+gtin).substr(1,i);
            if (Gtin_dictionary.dictionary.hasOwnProperty(gcp)) {
                return Gtin_dictionary.dictionary[gcp].page.replace("<gtin>",""+gtin);
            }
        }
        return "";
    }

    static get_gtin(sn){
    		sn = sn.replace(/[^\x20-\x7E]+/g, ""); // remove non visible chars
        //sn = sn.replace(/[^ -~]+/g, ""); // remove non visible chars
        
        if (sn.length === 13) {
             return "0"+sn;
        }
        else if (sn.length === 14) {
            return sn;
        }
        else if (sn.length >= 18 && sn.substr(0,2) === "01" && sn.substr(16,2) === "21") {
            return sn.substr(2,14);
        }
        return "";
    }
}

var pages_dictionary = {
    '5018431':{"gcp":"5018431","page":"https://serono.merckgroup.com/products?gtin=<gtin>"},
    '4065265':{"gcp":"4065265","page":"https://merckgroup.com/products?gtin=<gtin>"},
    '8806617':{"gcp":"8806617","page":"https://korea.merckgroup.com/products?gtin=<gtin>"},
    '590999003594':{"gcp":"590999003594","page":"https://www.merckgroup.com/content/dam/web/corporate/non-images/product-information/pl/erbitux/UKR-PIL-Erbitux-5-VAR-IA-ATC-code-May-2022.pdf?gtin=<gtin>"},
    '415004773182':{"gcp":"415004773182","page":"https://www.gebrauchsinformation4-0.de/gi/rebif-8-8-22-mikrogramm-injektionslosung-in-einer-fertigspritze~018136/?gtin=<gtin>"},
    '405483936533':{"gcp":"405483936533","page":"https://www.merckgroup.com/content/dam/web/corporate/non-images/product-information/pl/mavenclad/UKR-PIL-Mavenclad-10-VAR-R-Renewal-April-2022.pdf?gtin=<gtin>"},
    '405483946215':{"gcp":"405483946215","page":"https://www.merckgroup.com/br-pt/bulario/Bavencio_BulaPaciente_010722.pdf?gtin=<gtin>"},
    '5011986':{"gcp":"5011986","page":"https://vogels.co.uk/products?gtin=<gtin>"},
    '95212':{"gcp":"95212","page":"https://www.tracelink.com/?gtin=<gtin>"}
}

Gtin_dictionary.dictionary = pages_dictionary;
