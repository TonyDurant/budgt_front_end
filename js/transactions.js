var transactions = new Vue({
    el: '#transactions',
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    },
    data: {
        transactions: [
            {
                "id": "5a5141dfac1aef264f3c0a23",
                "name": "Vitamin A+",
                "value": 50,
                "timestamp": "2018-01-06T16:38:39.938-05:00",
                "uid": "5a406658ac1aef47ec5d4145"
            },
            {
                "id": "5a516b17ac1aef39cdb502ac",
                "name": "Am I good for edit?",
                "value": 100,
                "timestamp": "2018-01-06T19:34:31.369-05:00",
                "uid": "5a406658ac1aef47ec5d4145"
            },
            {
                "id": "5a52a3134afddc00014beaa5",
                "name": "Vitamin A+, B2, C, zz",
                "value": 60,
                "timestamp": "2018-01-07T17:48:16.44-05:00",
                "uid": "5a406658ac1aef47ec5d4145"
            },
            {
                "id": "5a5ac9e1ac1aef6136f801ae",
                "name": "Am I good for edit heh?",
                "value": 100,
                "timestamp": "2018-01-13T22:09:21.146-05:00",
                "uid": "5a406658ac1aef47ec5d4145"
            },
            {
                "id": "5a5ad2e0ac1aef6335c7244a",
                "name": "Am I good for edit heh?",
                "value": 100,
                "timestamp": "2018-01-13T22:47:44.454-05:00",
                "uid": "5a406658ac1aef47ec5d4145"
            }
        ]
    }
})