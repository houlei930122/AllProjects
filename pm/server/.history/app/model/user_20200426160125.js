// eslint-disable-next-line strict
module.exports = app => {
  // export default app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    // __v
    email: { type: String, required: true },
    passwd: { type: String, required: true, select: false },
    nickname: { type: String, required: true },
    avatar: { type: String, required: false, default: '/user.png' },
  }, { timestamps: true })
  return mongoose.model('User', UserSchema)
}