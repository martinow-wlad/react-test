export const baseRequest = async (url: string, data?: any) => {
    try {
        const res = await fetch(`http://localhost:8080/api/v1${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer faeaef'
            }
        });

        const data = await res.json()

        return {
            error: false,
            data
        }
    } catch (error) {
        return {
            error: true,
            reason: error
        }       
    }
}