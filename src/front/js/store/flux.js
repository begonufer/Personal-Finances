const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			incomes: [],
			expenses: [],

		},
		actions: {
			setIncome: async (value,category,dateTime,description) => {
				const response = await fetch (process.env.BACKEND_URL + "/api/user/login", {
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
				const user = await response.json()
				setStore({...getStore(), user})
			},	

			setnewUser: async (email, password,name,surname,birthdate,phone_number) => {
				const response = await fetch (process.env.BACKEND_URL + "/api/user/", {
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
				setStore({...getStore(), newuser})
			},	
			
			setUser: async (email, password) => {
				const response = await fetch (process.env.BACKEND_URL + "/api/user/login", {
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
				setStore({...getStore(), user})
			},	

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
