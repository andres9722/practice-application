import app from './app'

app.listen(app.get('port'), () => console.log(`Start port ${app.get('port')}`))
