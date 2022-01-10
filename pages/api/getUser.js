import getUser from '../../utils/getUser'

const apiGetUser = async(req, res) => {
    const data = await getUser('bfccardoso')
    res.send(data)
}

export default apiGetUser