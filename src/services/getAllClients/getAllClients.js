export default function getAllClients() {
    try {
        return new Promise(async (resolve, reject) => {
            const myHeaders = new Headers();

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };


            await fetch(`http://localhost:9000/clients`,
                requestOptions
            )
                .then(async (response) => {
                    const resp = await response.json();

                    if (Boolean(resp?.error)) {
                        reject(resp?.error);
                    }
                    resolve(resp);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    } catch (err) {
        throw err;
    }
}
