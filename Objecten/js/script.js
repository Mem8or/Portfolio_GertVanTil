const audi = {
    _naam: "audio A10 Piggeh",
    _bouwjaar: 2009,
    _kmStand: 165000,
    _energielabel: "A",
    _brandstof: "Benzine",
    _prijs: 12750.00,
    _garantie: false,
    _opties: ["Tom Cruise Control", "Boordcomputerer", "Navigatiesysteem", "Airconditioning", "IBS"],
    motor: {
        _verbruik: "15,62 km/l",
        _motorinhoud: "1.984 cc",
        _topsnelheid: "2000000 km/h",
        _bouwjaarvermogen: "211 PK"
    },

    get naam() {
		return this._naam;
	},
    set naam(naam) { 
        if (typeof naam === 'string') {
            this._naam = naam;
            console.log("naam valid");
        } else {
            throw new Error("not a valid string");
        }
	},
    get bouwjaar() {
		return this._bouwjaar;
	},
    set bouwjaar(bouwjaar) { 
        const pattern = /^(200[7-9]|201[0-6])$/;
        if (pattern.test(bouwjaar)) {
            this._bouwjaar = bouwjaar;
            console.log("bouwjaar valid");
        } else {
            throw new Error("not a valid date");
        }    
    },
    get kmStand() {
		return this._kmStand;
	},	
        set kmStand(kmStand) { 
            const pattern = /^\d+$/;
            if (pattern.test(kmStand)) {
                this._kmStand = kmStand;
                console.log("kmstand valid");
            } else {
                throw new Error("not a valid kmstand");
            }  
	},
    get energielabel() {
		return this._energielabel;
	},
    set energielabel(energielabel) { 
        const pattern = /^[A-G]$/;
        if (pattern.test(energielabel)) {
            this._energielabel = energielabel;
            console.log("energylabel valid");
        } else {
            throw new Error("not a valid energylabel");
        }  
	},
    get brandstof() {
		return this._brandstof;
	},
    set brandstof(brandstof) { 
        if (brandstof === "Benzine" || brandstof === "Diesel") {
            this._brandstof = brandstof;
            console.log("fuel valid");}
         else {
            throw new Error("not a valid fuel type");
        }  
	},
    get prijs() {
		return `€${this._prijs.toFixed(2).replace ('.',',')}`;
	},
    set prijs(prijs) {
        const pattern = /^\d+(\.\d{1,2})?$/;
        if (pattern.test(prijs)) {
            this._prijs = prijs;
            console.log("price valid");
        } else {
            throw new Error("not a valid price");
        }  
	},
	get garantie() {
        return this._garantie ? 'Yes' : 'No';
	},
    set garantie(garantie) { 
        if (typeof garantie === 'boolean') {
            this._garantie = garantie;
            console.log("garantie valid");}
         else {
            throw new Error("not a valid garantie");
        } 
	},
    get opties() {
		return this._opties;
	},
    set opties(opties) { 
		this._opties = opties;
	},
    get verbruik() {
		return this.motor._verbruik;
	},
    set verbruik(verbruik) { 
		this._verbruik = verbruik;
	},
    get motorinhoud() {
		return this.motor._motorinhoud;
	},
    set motorinhoud(motorinhoud) { 
		this._motorinhoud = motorinhoud;
	},
	get topsnelheid() {
		return this.motor._topsnelheid;
	},
    set topsnelheid(topsnelheid) { 
		this._topsnelheid = topsnelheid;
	},
    get bouwjaarvermogen() {
		return this.motor._bouwjaarvermogen;
	},
    set bouwjaarvermogen(bouwjaarvermogen) { 
		this._bouwjaarvermogen = bouwjaarvermogen;
	},


    
        buy: function(){
        console.log("Voor slechts " + this.prijs + " kan deze mooie " + this.naam + " uit " + this.bouwjaar + " al van u zijn.");
        },
        accelerate: function(){
        console.log("Deze " + this.naam + " is binnen een paar seconden op de topsnelheid van " + this.topsnelheid);
        },
        refuel: function(){
        console.log("Deze " + this.naam + " verbruikt gemiddeld " + this.verbruik + " waardoor u niet heel vaak benzine hoeft te tanken.");
        },
};

audi.naam = audi._naam;
audi.bouwjaar = audi._bouwjaar;
audi.kmStand = audi._kmStand;
audi.energielabel = audi.energielabel;
audi.brandstof = audi._brandstof;
audi.prijs = audi._prijs;
audi.garantie = audi._garantie;


audi.buy();
audi.accelerate();
audi.refuel();

const carTable = document.getElementById('carTable').getElementsByTagName('tbody')[0];

function addRow(property, value) {
    const row = carTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = property;
    cell2.textContent = value;
}

function addNestedObject(obj) {
    if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                addRow(key.replace(/^_/, ''), obj[key]);
            }
        }
    }
}

addRow('naam', audi.naam);
addRow('bouwjaar', audi.bouwjaar);
addRow('kmStand', audi.kmStand);
addRow('energielabel', audi.energielabel);
addRow('brandstof', audi.brandstof);
addRow('prijs', audi.prijs);
addRow('garantie', audi.garantie);
addRow('opties', audi.opties.join(', '));
addNestedObject(audi.motor, 'motor');

console.log("Naam:", audi.naam);
console.log("Bouwjaar:", audi.bouwjaar);
console.log("Kilometerstand:", audi.kmStand);
console.log("Energielabel:", audi.energielabel);
console.log("Brandstof:", audi.brandstof);
console.log("Prijs:", audi.prijs);
console.log("Garantie:", audi.garantie);
console.log("Opties:", audi.opties);
console.log("Motor:", audi.motor);