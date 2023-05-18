const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			logged: false,
			incomes: [],
			expenses: [],
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

            setExpense: async (value,category,dateTime,description) => {
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
				const expense = await response.json()
				setStore({...getStore(), expense})
			},

			setIncome: async (value,category,dateTime,description) => {
				const store = getStore();
				console.log(store)
				const response = await fetch (process.env.BACKEND_URL + "api/income", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
						"Authorization":`Bearer ${store.token}`
					},
					body: JSON.stringify({
						value,
						category,
						dateTime,
					})
				})
				const income = await response.json()
				setStore({...store, income})
			},	

			setnewUser: async (email, password,name,surname,birthdate,phone_number) => {
				const response = await fetch (process.env.BACKEND_URL + "api/user/", {
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
