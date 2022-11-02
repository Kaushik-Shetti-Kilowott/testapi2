
import express from 'express'


const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())


  // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.account.findMany()
//   console.log(allUsers)

//Function to create an account


app.get('/', async (req, res) => {


  console.log("Hello read");
  res.send('<h1>Hello world</h1>')
  res.end()
})

app.post(`/signup`, async (req, res) => {
  const { name, email, status } = req.body


  res.json({message:"Hello"})
})  

  //Functon to read an account
app.get('/user', async (req, res) => {


  console.log("Hello read");
  res.json({message:"Hello Read"})
})



const server = app.listen(port, () =>
  console.log(`Server ready at: http://localhost:3000`)
)

//^KQcu94Hr}

