enum GenderVariant {
    Male = 'male',
    Female = 'female'
}

enum BloodGroup {

}

enum EyeColor {

}

enum HairType {

}

enum UserRoles {
    User = 'user',
    Admin = 'admin',
} 

interface HairColor {
 color: string, 
 type: HairType 
}
interface UserAdress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: [Object],
    country: string
}
interface UserBank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

interface UserCompany {
    department: string,
    name: string,
    title: string,
    address: [Object]
}

interface UserCryptoWallet {
    coin: string,
    wallet: string,
    network: string
}

interface UserData {
id: number,
firstName: string,
lastName: string,
maidenName: string,
age: number,
gender: GenderVariant,
email: string,
phone: string,
username: string,
password: string,
birthDate: string,
image: string,
bloodGroup: BloodGroup,
height: number,
weight: number,
eyeColor: EyeColor,
hair: HairColor,
ip: string,
address: UserAdress,
macAddress: string,
university: string,
bank: UserBank,
company: UserCompany,
ein: string,
ssn: string,
userAgent: string,
crypto: UserCryptoWallet,
role: UserRoles
}


interface DummyUsersData {
    users: UserData
}

async function getDummyUsersData() {
    const res = await fetch('https://dummyjson.com/users');
    const data: DummyUsersData = await res.json();
    
    console.log(data.users);
}

getDummyUsersData();