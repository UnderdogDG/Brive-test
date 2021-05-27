const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(()=> console.log('Conected to MongoDB...'))
  .catch( err => console.log('No conection...' + err));

const courseSchema = new mongoose.Schema({
  name: String,
  authot: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);


//save document -> promise
async function saveCourse(name, author, tags, date, isPublished){
  const course = new Course({
    name,
    author,
    tags,
    isPublished 
  });
  
  
  const result = await course.save()

  console.log(result);
};

async function findCourse(){
  // $eq: (equal)
  // $ne: (no equal)
  // $gt: (grater than)
  // $gte: (grater or equal than)
  // $lt: (less than)
  // $lte: (less or equal than)
  // $in: ()
  // $nin: (not in)

  const document = await Course.find({ name: "My stupid Course" })
    // .find({ name: /^pattern$/ })
    // .or([{author: "mr X"}, {isPublished: true}])
    // .and([{author: "mr X"}, {isPublished: true}])
    // .skip((pageNumber - 1) * pageSize) //pagination
    // .limit(pageSize)
    // .sort()
    // .select()
    // .count()
  console.log(document);
};

saveCourse("My stupid Course", "Mr stupid", ["bored", "stupid"], true);
findCourse();