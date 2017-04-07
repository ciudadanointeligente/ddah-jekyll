define('ddah-emberConfig/config/environment', ['ember'], function(Ember) {return { 'default': {
	"modulePrefix": "ddah-ember",
	"matcher": {
		"area": {
			"name": "area",
			"id": {
				"fieldToGetIdFrom": "area"
			}
		},
		"promise": {
			"content": "promesa",
			"number": "id",
			"title": "titulo",
			"ja-why": "ja_porque",
			"jc-why": "jn_porque",
			"coherence-level": "coherencia",
			"id": {
				"fieldToGetIdFrom": "id"
			},
			"relationships": ["area"]
		},
		"bill": {
			"name": "boletin",
			"title": "titulo_proyecto",
			"url": "link",
			"justification": "justificacion_avance",
			"year": "Ano",
			"version": "Version",
			"id": {
				"fieldToGetIdFrom": "boletin"
			},
			"relationships": ["phase", "priority"],
			"chekIsEmpty": "boletin"
		},
		"justification": {
			"justification": "justificacion_avance",
			"id": {
				"fieldToGetIdFrom": "justificacion_avance"
			},
			"relationships": ["promise", "bill"]
		}
	},
	"studies": {
		"studies": ["Bachelet-2014-2018_Marzo-2017", "Bachelet-2014-2018_Marzo-2016", "Bachelet-2014-2018_Marzo-2015", "Piñera-2010-2014_Marzo-2013", "Piñera-2010-2014_Marzo-2012"]
	},
	"priorities": {
		"priorities": [{
			"countColumnName": "simple",
			"name": "Simple"
		}, {
			"countColumnName": "suma",
			"name": "Suma"
		}, {
			"countColumnName": "inmediata",
			"name": "Inmediata"
		}]
	},
	"phases": {
		"columnName": "nombre avance",
		"phases": [{
			"name": "Primer Tramite",
			"fullfilment": 40
		}, {
			"name": "Segundo Tramite",
			"fullfilment": 70
		}, {
			"name": "Veto",
			"fullfilment": 40
		}, {
			"name": "Insistencia",
			"fullfilment": 40
		}, {
			"name": "Rechazado Retirado",
			"fullfilment": 0
		}, {
			"name": "Comisión Mixta",
			"fullfilment": 70
		}, {
			"name": "Tribunal Constitucional",
			"fullfilment": 100
		}, {
			"name": "Aprobación Presidencial",
			"fullfilment": 90
		}, {
			"name": "Promulgado",
			"fullfilment": 100
		}]
	},
	"environment": "development",
	"rootURL": "/",
	"locationType": "auto",
	"EmberENV": {
		"FEATURES": {}
	},
	"APP": {
		"name": "ddah-ember",
		"version": "0.0.0+345a7426"
	},
	"exportApplicationGlobal": true
}
};});//# sourceMappingURL=config.map
