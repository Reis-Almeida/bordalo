const headers = new Headers();

headers.append("Content-Type", "application/json; charset=utf-8");
headers.append('Accept', 'application/json');

type IFormValues = {
    code?: string | number,
    name: string,
    email: string,
    subject: string,
    offer? : string,
    message: string,
    cel?: string
}

const myInit = { 
    method: 'GET',
    headers: headers,
};

export const useApi = () => {
    const _fetchData = async () => {
        try {
            const res = await fetch("https://allmateste.com.br/site-next/extractXml.php", myInit);
            const data = await res.json();
  
            return data;

        } catch (error) {
            console.log("Error", error);
            return "Failed";
        }
    }

    const _sendEmail = async (formValues : IFormValues) => {

        const myInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formValues)
        }

        const isSuccefull = fetch("http://allmateste.com.br/mail/index.php", myInit)
            .then(async (data) => {
                if(data.status === 200) return true;

                return false;
            });


        return isSuccefull;
    }

    const _announceProperty = async (formValues : any) => {

        const myInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formValues)
        }

        const isSuccefull = fetch("http://allmateste.com.br/mail/announce.php", myInit)
            .then(async (data) => {
                if(data.status === 200) return true;

                return false;
            });


        return isSuccefull;
    }

    return { _fetchData, _sendEmail, _announceProperty }
}