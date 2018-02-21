const data = {
    "products" : [
        {
            "sku": 1231234,
            "image": "",
            "name": "arrow",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "polo",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "levis",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "US polo",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "Indian Terran",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "UCB",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "arrow",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "UCB",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        }

    ]
};

const getDataAction = (data) => {
    return {
        type: "GET_DATA",
        data : data
    }
};

const searchAction = (str) => {
    return {
        type: "SEARCH",
        data: str
    }
};

let cachedStore = {};

const PLPActions = {
    productsData : [],
    getAllProducts : () => {
        return (dispatch) => {
            fetch("products.json")
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    cachedStore = data;
                    dispatch (getDataAction(data));
                });
        }
    },
    searchProductByName : (keyword) => {
        var filteredData = [...cachedStore.products];
        if(keyword !== ""){
            filteredData = filteredData.filter((item)=>{
                return  (item.name.indexOf(keyword) >= 0)
            });
        }

        return (dispatch) => {
            dispatch(searchAction({products:filteredData}));
        }
    }
};


export default PLPActions;
