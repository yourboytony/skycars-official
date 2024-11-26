import express from 'express'
import cors from 'cors'
import './db/mongoose.js'
import authRoutes from './routes/auth.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 