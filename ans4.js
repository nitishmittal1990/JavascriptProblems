
var Currency = function (amount) {
	var commoncur = {
	    "USD": {
	        "symbol": "$",
	        "name": "Dollar",
	        "code": "USD",
	        "name_plural": "dollars"
	    },
	    "CAD": {
	        "symbol": "CA$",
	        "name": "Canadian Dollar",
	        "code": "CAD",
	        "name_plural": "Canadian dollars"
	    },
	    "EUR": {
	        "symbol": "€",
	        "name": "Euro",
	        "code": "EUR",
	        "name_plural": "euros"
	    },
	    "AED": {
	        "symbol": "AED",
	        "name": "United Arab Emirates Dirham",
	        "code": "AED",
	        "name_plural": "UAE dirhams"
	    },
	    "AFN": {
	        "symbol": "Af",
	        "name": "Afghan Afghani",
	        "code": "AFN",
	        "name_plural": "Afghan Afghanis"
	    },
	    "ALL": {
	        "symbol": "ALL",
	        "name": "Albanian Lek",
	        "code": "ALL",
	        "name_plural": "Albanian lekë"
	    },
	    "AMD": {
	        "symbol": "AMD",
	        "name": "Armenian Dram",
	        "code": "AMD",
	        "name_plural": "Armenian drams"
	    },
	    "ARS": {
	        "symbol": "AR$",
	        "name": "Argentine Peso",
	        "code": "ARS",
	        "name_plural": "Argentine pesos"
	    },
	    "AUD": {
	        "symbol": "AU$",
	        "name": "Australian Dollar",
	        "code": "AUD",
	        "name_plural": "Australian dollars"
	    },
	    "AZN": {
	        "symbol": "man.",
	        "name": "Azerbaijani Manat",
	        "code": "AZN",
	        "name_plural": "Azerbaijani manats"
	    },
	    "BAM": {
	        "symbol": "KM",
	        "name": "Bosnia-Herzegovina Convertible Mark",
	        "code": "BAM",
	        "name_plural": "Bosnia-Herzegovina convertible marks"
	    },
	    "BDT": {
	        "symbol": "Tk",
	        "name": "Bangladeshi Taka",
	        "code": "BDT",
	        "name_plural": "Bangladeshi takas"
	    },
	    "BGN": {
	        "symbol": "BGN",
	        "name": "Bulgarian Lev",
	        "code": "BGN",
	        "name_plural": "Bulgarian leva"
	    },
	    "BHD": {
	        "symbol": "BD",
	        "name": "Bahraini Dinar",
	        "code": "BHD",
	        "name_plural": "Bahraini dinars"
	    },
	    "BIF": {
	        "symbol": "FBu",
	        "name": "Burundian Franc",
	        "code": "BIF",
	        "name_plural": "Burundian francs"
	    },
	    "BND": {
	        "symbol": "BN$",
	        "name": "Brunei Dollar",
	        "code": "BND",
	        "name_plural": "Brunei dollars"
	    },
	    "BOB": {
	        "symbol": "Bs",
	        "name": "Bolivian Boliviano",
	        "code": "BOB",
	        "name_plural": "Bolivian bolivianos"
	    },
	    "BRL": {
	        "symbol": "R$",
	        "name": "Brazilian Real",
	        "code": "BRL",
	        "name_plural": "Brazilian reals"
	    },
	    "BWP": {
	        "symbol": "BWP",
	        "name": "Botswanan Pula",
	        "code": "BWP",
	        "name_plural": "Botswanan pulas"
	    },
	    "BYR": {
	        "symbol": "BYR",
	        "name": "Belarusian Ruble",
	        "code": "BYR",
	        "name_plural": "Belarusian rubles"
	    },
	    "BZD": {
	        "symbol": "BZ$",
	        "name": "Belize Dollar",
	        "code": "BZD",
	        "name_plural": "Belize dollars"
	    },
	    "CDF": {
	        "symbol": "CDF",
	        "name": "Congolese Franc",
	        "code": "CDF",
	        "name_plural": "Congolese francs"
	    },
	    "CHF": {
	        "symbol": "CHF",
	        "name": "Swiss Franc",
	        "code": "CHF",
	        "name_plural": "Swiss francs"
	    },
	    "CLP": {
	        "symbol": "CL$",
	        "name": "Chilean Peso",
	        "code": "CLP",
	        "name_plural": "Chilean pesos"
	    },
	    "CNY": {
	        "symbol": "CN¥",
	        "name": "Chinese Yuan",
	        "code": "CNY",
	        "name_plural": "Chinese yuan"
	    },
	    "COP": {
	        "symbol": "CO$",
	        "name": "Colombian Peso",
	        "code": "COP",
	        "name_plural": "Colombian pesos"
	    },
	    "CRC": {
	        "symbol": "₡",
	        "name": "Costa Rican Colón",
	        "code": "CRC",
	        "name_plural": "Costa Rican colóns"
	    },
	    "CVE": {
	        "symbol": "CV$",
	        "name": "Cape Verdean Escudo",
	        "code": "CVE",
	        "name_plural": "Cape Verdean escudos"
	    },
	    "CZK": {
	        "symbol": "Kč",
	        "name": "Czech Republic Koruna",
	        "code": "CZK",
	        "name_plural": "Czech Republic korunas"
	    },
	    "DJF": {
	        "symbol": "Fdj",
	        "name": "Djiboutian Franc",
	        "code": "DJF",
	        "name_plural": "Djiboutian francs"
	    },
	    "DKK": {
	        "symbol": "Dkr",
	        "name": "Danish Krone",
	        "code": "DKK",
	        "name_plural": "Danish kroner"
	    },
	    "DOP": {
	        "symbol": "RD$",
	        "name": "Dominican Peso",
	        "code": "DOP",
	        "name_plural": "Dominican pesos"
	    },
	    "DZD": {
	        "symbol": "DA",
	        "name": "Algerian Dinar",
	        "code": "DZD",
	        "name_plural": "Algerian dinars"
	    },
	    "EEK": {
	        "symbol": "Ekr",
	        "name": "Estonian Kroon",
	        "code": "EEK",
	        "name_plural": "Estonian kroons"
	    },
	    "EGP": {
	        "symbol": "EGP",
	        "name": "Egyptian Pound",
	        "code": "EGP",
	        "name_plural": "Egyptian pounds"
	    },
	    "ERN": {
	        "symbol": "Nfk",
	        "name": "Eritrean Nakfa",
	        "code": "ERN",
	        "name_plural": "Eritrean nakfas"
	    },
	    "ETB": {
	        "symbol": "Br",
	        "name": "Ethiopian Birr",
	        "code": "ETB",
	        "name_plural": "Ethiopian birrs"
	    },
	    "GBP": {
	        "symbol": "£",
	        "name": "British Pound Sterling",
	        "code": "GBP",
	        "name_plural": "British pounds sterling"
	    },
	    "GEL": {
	        "symbol": "GEL",
	        "name": "Georgian Lari",
	        "code": "GEL",
	        "name_plural": "Georgian laris"
	    },
	    "GHS": {
	        "symbol": "GH₵",
	        "name": "Ghanaian Cedi",
	        "code": "GHS",
	        "name_plural": "Ghanaian cedis"
	    },
	    "GNF": {
	        "symbol": "FG",
	        "name": "Guinean Franc",
	        "code": "GNF",
	        "name_plural": "Guinean francs"
	    },
	    "GTQ": {
	        "symbol": "GTQ",
	        "name": "Guatemalan Quetzal",
	        "code": "GTQ",
	        "name_plural": "Guatemalan quetzals"
	    },
	    "HKD": {
	        "symbol": "HK$",
	        "name": "Hong Kong Dollar",
	        "code": "HKD",
	        "name_plural": "Hong Kong dollars"
	    },
	    "HNL": {
	        "symbol": "HNL",
	        "name": "Honduran Lempira",
	        "code": "HNL",
	        "name_plural": "Honduran lempiras"
	    },
	    "HRK": {
	        "symbol": "kn",
	        "name": "Croatian Kuna",
	        "code": "HRK",
	        "name_plural": "Croatian kunas"
	    },
	    "HUF": {
	        "symbol": "Ft",
	        "name": "Hungarian Forint",
	        "code": "HUF",
	        "name_plural": "Hungarian forints"
	    },
	    "IDR": {
	        "symbol": "Rp",
	        "name": "Indonesian Rupiah",
	        "code": "IDR",
	        "name_plural": "Indonesian rupiahs"
	    },
	    "ILS": {
	        "symbol": "₪",
	        "name": "Israeli New Sheqel",
	        "code": "ILS",
	        "name_plural": "Israeli new sheqels"
	    },
	    "INR": {
	        "symbol": "Rs",
	        "name": "Indian Rupee",
	        "code": "INR",
	        "name_plural": "Indian rupees"
	    },
	    "IQD": {
	        "symbol": "IQD",
	        "name": "Iraqi Dinar",
	        "code": "IQD",
	        "name_plural": "Iraqi dinars"
	    },
	    "IRR": {
	        "symbol": "IRR",
	        "name": "Iranian Rial",
	        "code": "IRR",
	        "name_plural": "Iranian rials"
	    },
	    "ISK": {
	        "symbol": "Ikr",
	        "name": "Icelandic Króna",
	        "code": "ISK",
	        "name_plural": "Icelandic krónur"
	    },
	    "JMD": {
	        "symbol": "J$",
	        "name": "Jamaican Dollar",
	        "code": "JMD",
	        "name_plural": "Jamaican dollars"
	    },
	    "JOD": {
	        "symbol": "JD",
	        "name": "Jordanian Dinar",
	        "code": "JOD",
	        "name_plural": "Jordanian dinars"
	    },
	    "JPY": {
	        "symbol": "¥",
	        "name": "Japanese Yen",
	        "code": "JPY",
	        "name_plural": "Japanese yen"
	    },
	    "KES": {
	        "symbol": "Ksh",
	        "name": "Kenyan Shilling",
	        "code": "KES",
	        "name_plural": "Kenyan shillings"
	    },
	    "KHR": {
	        "symbol": "KHR",
	        "name": "Cambodian Riel",
	        "code": "KHR",
	        "name_plural": "Cambodian riels"
	    },
	    "KMF": {
	        "symbol": "CF",
	        "name": "Comorian Franc",
	        "code": "KMF",
	        "name_plural": "Comorian francs"
	    },
	    "KRW": {
	        "symbol": "₩",
	        "name": "South Korean Won",
	        "code": "KRW",
	        "name_plural": "South Korean won"
	    },
	    "KWD": {
	        "symbol": "KD",
	        "name": "Kuwaiti Dinar",
	        "code": "KWD",
	        "name_plural": "Kuwaiti dinars"
	    },
	    "KZT": {
	        "symbol": "KZT",
	        "name": "Kazakhstani Tenge",
	        "code": "KZT",
	        "name_plural": "Kazakhstani tenges"
	    },
	    "LBP": {
	        "symbol": "LB£",
	        "name": "Lebanese Pound",
	        "code": "LBP",
	        "name_plural": "Lebanese pounds"
	    },
	    "LKR": {
	        "symbol": "SLRs",
	        "name": "Sri Lankan Rupee",
	        "code": "LKR",
	        "name_plural": "Sri Lankan rupees"
	    },
	    "LTL": {
	        "symbol": "Lt",
	        "name": "Lithuanian Litas",
	        "code": "LTL",
	        "name_plural": "Lithuanian litai"
	    },
	    "LVL": {
	        "symbol": "Ls",
	        "name": "Latvian Lats",
	        "code": "LVL",
	        "name_plural": "Latvian lati"
	    },
	    "LYD": {
	        "symbol": "LD",
	        "name": "Libyan Dinar",
	        "code": "LYD",
	        "name_plural": "Libyan dinars"
	    },
	    "MAD": {
	        "symbol": "MAD",
	        "name": "Moroccan Dirham",
	        "code": "MAD",
	        "name_plural": "Moroccan dirhams"
	    },
	    "MDL": {
	        "symbol": "MDL",
	        "name": "Moldovan Leu",
	        "code": "MDL",
	        "name_plural": "Moldovan lei"
	    },
	    "MGA": {
	        "symbol": "MGA",
	        "name": "Malagasy Ariary",
	        "code": "MGA",
	        "name_plural": "Malagasy Ariaries"
	    },
	    "MKD": {
	        "symbol": "MKD",
	        "name": "Macedonian Denar",
	        "code": "MKD",
	        "name_plural": "Macedonian denari"
	    },
	    "MMK": {
	        "symbol": "MMK",
	        "name": "Myanma Kyat",
	        "code": "MMK",
	        "name_plural": "Myanma kyats"
	    },
	    "MOP": {
	        "symbol": "MOP$",
	        "name": "Macanese Pataca",
	        "code": "MOP",
	        "name_plural": "Macanese patacas"
	    },
	    "MUR": {
	        "symbol": "MURs",
	        "name": "Mauritian Rupee",
	        "code": "MUR",
	        "name_plural": "Mauritian rupees"
	    },
	    "MXN": {
	        "symbol": "MX$",
	        "name": "Mexican Peso",
	        "code": "MXN",
	        "name_plural": "Mexican pesos"
	    },
	    "MYR": {
	        "symbol": "RM",
	        "name": "Malaysian Ringgit",
	        "code": "MYR",
	        "name_plural": "Malaysian ringgits"
	    },
	    "MZN": {
	        "symbol": "MTn",
	        "name": "Mozambican Metical",
	        "code": "MZN",
	        "name_plural": "Mozambican meticals"
	    },
	    "NAD": {
	        "symbol": "N$",
	        "name": "Namibian Dollar",
	        "code": "NAD",
	        "name_plural": "Namibian dollars"
	    },
	    "NGN": {
	        "symbol": "₦",
	        "name": "Nigerian Naira",
	        "code": "NGN",
	        "name_plural": "Nigerian nairas"
	    },
	    "NIO": {
	        "symbol": "C$",
	        "name": "Nicaraguan Córdoba",
	        "code": "NIO",
	        "name_plural": "Nicaraguan córdobas"
	    },
	    "NOK": {
	        "symbol": "Nkr",
	        "name": "Norwegian Krone",
	        "code": "NOK",
	        "name_plural": "Norwegian kroner"
	    },
	    "NPR": {
	        "symbol": "NPRs",
	        "name": "Nepalese Rupee",
	        "code": "NPR",
	        "name_plural": "Nepalese rupees"
	    },
	    "NZD": {
	        "symbol": "NZ$",
	        "name": "New Zealand Dollar",
	        "code": "NZD",
	        "name_plural": "New Zealand dollars"
	    },
	    "OMR": {
	        "symbol": "OMR",
	        "name": "Omani Rial",
	        "code": "OMR",
	        "name_plural": "Omani rials"
	    },
	    "PAB": {
	        "symbol": "B/.",
	        "name": "Panamanian Balboa",
	        "code": "PAB",
	        "name_plural": "Panamanian balboas"
	    },
	    "PEN": {
	        "symbol": "S/.",
	        "name": "Peruvian Nuevo Sol",
	        "code": "PEN",
	        "name_plural": "Peruvian nuevos soles"
	    },
	    "PHP": {
	        "symbol": "₱",
	        "name": "Philippine Peso",
	        "code": "PHP",
	        "name_plural": "Philippine pesos"
	    },
	    "PKR": {
	        "symbol": "PKRs",
	        "name": "Pakistani Rupee",
	        "code": "PKR",
	        "name_plural": "Pakistani rupees"
	    },
	    "PLN": {
	        "symbol": "zł",
	        "name": "Polish Zloty",
	        "code": "PLN",
	        "name_plural": "Polish zlotys"
	    },
	    "PYG": {
	        "symbol": "₲",
	        "name": "Paraguayan Guarani",
	        "code": "PYG",
	        "name_plural": "Paraguayan guaranis"
	    },
	    "QAR": {
	        "symbol": "QR",
	        "name": "Qatari Rial",
	        "code": "QAR",
	        "name_plural": "Qatari rials"
	    },
	    "RON": {
	        "symbol": "RON",
	        "name": "Romanian Leu",
	        "code": "RON",
	        "name_plural": "Romanian lei"
	    },
	    "RSD": {
	        "symbol": "din.",
	        "name": "Serbian Dinar",
	        "code": "RSD",
	        "name_plural": "Serbian dinars"
	    },
	    "RUB": {
	        "symbol": "RUB",
	        "name": "Russian Ruble",
	        "code": "RUB",
	        "name_plural": "Russian rubles"
	    },
	    "RWF": {
	        "symbol": "RWF",
	        "name": "Rwandan Franc",
	        "code": "RWF",
	        "name_plural": "Rwandan francs"
	    },
	    "SAR": {
	        "symbol": "SR",
	        "name": "Saudi Riyal",
	        "code": "SAR",
	        "name_plural": "Saudi riyals"
	    },
	    "SDG": {
	        "symbol": "SDG",
	        "name": "Sudanese Pound",
	        "code": "SDG",
	        "name_plural": "Sudanese pounds"
	    },
	    "SEK": {
	        "symbol": "Skr",
	        "name": "Swedish Krona",
	        "code": "SEK",
	        "name_plural": "Swedish kronor"
	    },
	    "SGD": {
	        "symbol": "S$",
	        "name": "Singapore Dollar",
	        "code": "SGD",
	        "name_plural": "Singapore dollars"
	    },
	    "SOS": {
	        "symbol": "Ssh",
	        "name": "Somali Shilling",
	        "code": "SOS",
	        "name_plural": "Somali shillings"
	    },
	    "SYP": {
	        "symbol": "SY£",
	        "name": "Syrian Pound",
	        "code": "SYP",
	        "name_plural": "Syrian pounds"
	    },
	    "THB": {
	        "symbol": "฿",
	        "name": "Thai Baht",
	        "code": "THB",
	        "name_plural": "Thai baht"
	    },
	    "TND": {
	        "symbol": "DT",
	        "name": "Tunisian Dinar",
	        "code": "TND",
	        "name_plural": "Tunisian dinars"
	    },
	    "TOP": {
	        "symbol": "T$",
	        "name": "Tongan Paʻanga",
	        "code": "TOP",
	        "name_plural": "Tongan paʻanga"
	    },
	    "TRY": {
	        "symbol": "TL",
	        "name": "Turkish Lira",
	        "code": "TRY",
	        "name_plural": "Turkish Lira"
	    },
	    "TTD": {
	        "symbol": "TT$",
	        "name": "Trinidad and Tobago Dollar",
	        "code": "TTD",
	        "name_plural": "Trinidad and Tobago dollars"
	    },
	    "TWD": {
	        "symbol": "NT$",
	        "name": "New Taiwan Dollar",
	        "code": "TWD",
	        "name_plural": "New Taiwan dollars"
	    },
	    "TZS": {
	        "symbol": "TSh",
	        "name": "Tanzanian Shilling",
	        "code": "TZS",
	        "name_plural": "Tanzanian shillings"
	    },
	    "UAH": {
	        "symbol": "₴",
	        "name": "Ukrainian Hryvnia",
	        "code": "UAH",
	        "name_plural": "Ukrainian hryvnias"
	    },
	    "UGX": {
	        "symbol": "USh",
	        "name": "Ugandan Shilling",
	        "code": "UGX",
	        "name_plural": "Ugandan shillings"
	    },
	    "UYU": {
	        "symbol": "$U",
	        "name": "Uruguayan Peso",
	        "code": "UYU",
	        "name_plural": "Uruguayan pesos"
	    },
	    "UZS": {
	        "symbol": "UZS",
	        "name": "Uzbekistan Som",
	        "code": "UZS",
	        "name_plural": "Uzbekistan som"
	    },
	    "VEF": {
	        "symbol": "Bs.F.",
	        "name": "Venezuelan Bolívar",
	        "code": "VEF",
	        "name_plural": "Venezuelan bolívars"
	    },
	    "VND": {
	        "symbol": "₫",
	        "name": "Vietnamese Dong",
	        "code": "VND",
	        "name_plural": "Vietnamese dong"
	    },
	    "XAF": {
	        "symbol": "FCFA",
	        "name": "CFA Franc BEAC",
	        "code": "XAF",
	        "name_plural": "CFA francs BEAC"
	    },
	    "XOF": {
	        "symbol": "CFA",
	        "name": "CFA Franc BCEAO",
	        "code": "XOF",
	        "name_plural": "CFA francs BCEAO"
	    },
	    "YER": {
	        "symbol": "YR",
	        "name": "Yemeni Rial",
	        "code": "YER",
	        "name_plural": "Yemeni rials"
	    },
	    "ZAR": {
	        "symbol": "R",
	        "name": "South African Rand",
	        "code": "ZAR",
	        "name_plural": "South African rand"
	    },
	    "ZMK": {
	        "symbol": "ZK",
	        "name": "Zambian Kwacha",
	        "code": "ZMK",
	        "name_plural": "Zambian kwachas"
	    }
	}
	this.amount = amount;
	this.formatCurrency = function(){
		var arr = amount.split(" ");
		var amountno = arr[0];
		arr = arr.splice(1);
		var tempstr = arr.join(" ").toLowerCase();
		for(key in commoncur) {
			var name = commoncur[key].name_plural.toLowerCase();
			if(tempstr == name){
				return commoncur[key].symbol + '' + amountno;
			}
		}
	}

}


var cur1 = new Currency("50 Canadian dollars");
var cur2 = new Currency("100 Indian rupees");
console.log(cur1.formatCurrency());
console.log(cur2.formatCurrency());