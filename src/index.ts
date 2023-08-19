import { registerWorker } from './helpers/service-worker.helper'

registerWorker()

const root = document.getElementById('root')!
root.innerHTML = 'OK'
