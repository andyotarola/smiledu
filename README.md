# Smiledu

## Datos para las tablas

### Cronograma

```json
db.cronogramas.insertOne(
    {
      "id_cronograma": 1,
      "year": 2021
    }
)
```
### Grados

```json
db.grados.insertMany([
    {
        "desc_grado": "PRIMERO",
        "nivel" : "INI"
    },
    {
        "desc_grado": "SEGUNDO",
        "nivel" : "INI"
    },
    {
        "desc_grado": "PRIMERO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "SEGUNDO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "TERCERO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "CUARTO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "QUINTO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "SEXTO",
        "nivel" : "PRI"
    },
    {
        "desc_grado": "PRIMERO",
        "nivel" : "SEC"
    },
    {
        "desc_grado": "SEGUNDO",
        "nivel" : "SEC"
    },
    {
        "desc_grado": "TERCERO",
        "nivel" : "SEC"
    },
    {
        "desc_grado": "CUARTO",
        "nivel" : "SEC"
    },
    {
        "desc_grado": "QUINTO",
        "nivel" : "SEC"
    },
])
```
### DetalleCronogramas
```json
db.detallecrogramas.insertMany([
    {
        "id_cronograma": 1,
        "pago": "MATRICULA",
        "fecha_vencimiento": "20/02/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "MARZO",
        "fecha_vencimiento": "01/03/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "ABRIL",
        "fecha_vencimiento": "01/04/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "MAYO",
        "fecha_vencimiento": "01/05/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "JUNIO",
        "fecha_vencimiento": "01/06/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "JULIO",
        "fecha_vencimiento": "01/07/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "AGOSTO",
        "fecha_vencimiento": "01/08/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "SEPTIEMBRE",
        "fecha_vencimiento": "01/09/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "OCTUBRE",
        "fecha_vencimiento": "01/10/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "NOVIEMBRE",
        "fecha_vencimiento": "01/11/2021",
    },
    {
        "id_cronograma": 1,
        "pago": "DICIEMBRE",
        "fecha_vencimiento": "01/12/2021",
    }
])
```

## Observaciones

### Matrícula
El monto de la matrícula que le se puse, fue igual al monto de la pensión, que depende del grado.

### Fecha de vencimiento
La fecha de vencimiento de las pensiones, puse que fueran el primer día de cada mes.
