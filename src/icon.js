import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

library.add(faCoffee)
library.add(solid)
library.add(regular)
library.add(brands)

Vue.component('fa-icon', FontAwesomeIcon)
