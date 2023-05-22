const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			logged: false,
			incomes: [],
			expenses: [],
			types: null,
			categories: null,
			incomecategories: null,
			token: ""
		},
		actions: {
			setLogged: (logged) => {
				setStore({logged:logged})
			},

			setVariableexpense: async (value,category,dateTime,description) => {
				const response = await fetch (process.env.BACKEND_URL + "api/expense", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify({
						value,
						category,
						dateTime,
						description,
					})
				})
				const variableexpense = await response.json()
				setStore({...getStore(), variableexpense})
			},

			getExpenses: async() => {
                const response = await fetch (process.env.BACKEND_URL + "api/expense", {
                    method: 'GET',
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const expenses = await response.json();
                setStore({ ...getStore(), expenses });
            },
			
            getIncomes: async() => {
                const response = await fetch (process.env.BACKEND_URL + "api/income", {
                    method: 'GET',
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const incomes = await response.json();
                setStore({ ...getStore(), incomes });
            },

			getTypes: async() => {
				const response = await fetch (process.env.BACKEND_URL + "api/types", {
                    method: 'GET',
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
				})
				const types = await response.json();
				setStore({...getStore(), types });
			},

			getCategories: async() => {
				const response = await fetch (process.env.BACKEND_URL + "api/categories", {
                    method: 'GET',
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
				})
				const categories = await response.json();
				setStore({...getStore(), categories });
			},

			getIncomeCategories: async() => {
				const response = await fetch (process.env.BACKEND_URL + "api/incomecategories", {
                    method: 'GET',
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
				})
				const incomecategories = await response.json();
				setStore({...getStore(), incomecategories });
			},

            setExpense: async (dateTime,type_id,category_id,value) => {
				const response = await fetch (process.env.BACKEND_URL + "api/expense", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
						"Authorization": `Bearer ${localStorage.getItem('token')}`
					},
					body: JSON.stringify({
						value,
						category_id,
						dateTime,
						type_id,
					})
				})
				const expense = await response.json()
				setStore({...getStore(), expense})
			},

			setIncome: async (dateTime,incomecategory_id,value) => {
				const store = getStore();
				console.log(store)
				const response = await fetch (process.env.BACKEND_URL + "api/income", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
						"Authorization": `Bearer ${localStorage.getItem('token')}`
					},
					body: JSON.stringify({
						value,
						incomecategory_id,
						dateTime,
					})
				})
				const income = await response.json()
				setStore({...store, income})
			},	

			setnewUser: async (email, password,name,surname,birthdate,phone_number) => {
				const response = await fetch (process.env.BACKEND_URL + "api/user", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify({
						email,
						password,
						name,
						surname,
						birthdate,
						phone_number
					})
				})
				const newuser = await response.json()
				setStore({...getStore(), user: newuser})
			},
			
			setUser: async (email, password) => {
				const response = await fetch (process.env.BACKEND_URL + "api/user/login", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify({
						email,
						password
					})
				})
				const user = await response.json()
				if (user.token){
					localStorage.setItem('token', user.token)
					getActions().setLogged(true)
				}
				setStore({...getStore(), token:user.token, user})
			},

			clearUser: () => {
				localStorage.removeItem('token')
				getActions().setLogged(false)
				setStore({...getStore(), token: '', user: {}})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
	
};

export default getState;
