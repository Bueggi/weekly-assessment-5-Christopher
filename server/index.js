const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-body');
const router = require('./router.js');

const db = require('./models/index.js');
const port = 3000;

app.use(bodyparser());
app.use(router.routes());

(async () =>
{
  try {
    await db.once('open', function() {
      console.log('db running');
    });
    app.listen(port, () => console.log('connected on port 3K'));
  }
  catch (e) {
    db.on('error', console.error.bind(console, 'connection error:'));
    throw new Error(e);
  }
})();
