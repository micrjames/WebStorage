localStorage.setItem(“key”, “value”);
let value = localStorage.getItem(“key”);
localStorage.removeItem(“key”);

type User = {
	name: string;
	age: number;
};

const storeUser = (user: User) => {
	localStorage.setItem(‘user’, JSON.stringify(user));
};
const retrieveUser = (): User | null => {
	const userData = localStorage.getItem(“user”);
	return userData ? JSON.parse(userData) as User : null;
};

const isUser = (data: any): data as User => {
	return typeof data.name === “string” && typeof data.age === “number”
}:
const retrievedData = JSON.parse(localStorage.getItem(“user”) || ‘{}’);
if(isUser(retrievedData)) {
	console.log(‘Data is of type User’);
} else {
	console.error(“Data does not match the User type.”);
}

if(typeof(Storage) !== “undefined”) {
	localStorage.setItem(“key”, “value”);
} else {
	console.error(“Local storage is not supported in this browser.”);
}

const dataWithExpiry = {
	value: ‘some data’,
	expiry: new Date().getTime() + (60 * 60 * 24 * 1000) // 1 day in ms
};
localStorage.setItem(“temporaryData’, JSON.stringify(dataWithExpiry));

const retrievedData = JSON.parse(localStorage.getItem(‘temporaryData’) || ‘{}’);
if(retrievedData.expiry > new Date().getTime()) {
	console.log(retrievedData.value);
} else {
	localStorage.removeItem(‘temporaryData’);
}

const retrievedData = retrieveData<User>('userProfile');
if (retrievedData && typeof retrievedData.name === 'string' && typeof retrievedData.age === 'number') {
    console.log('Data is valid');
} else {
    console.error('Data does not match the expected type');
}

localStorage.clear();			// clear all data
