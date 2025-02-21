<template>
  <section class="applicant-form" :class="{draggeble: changeClass}">
    <div class="applicant-form-content">
      <div class="header">
        <!-- <img :src="coverUrl" alt="" /> -->
        <div class="content">
          <img v-if="coverUrl" :src="coverUrl" alt="job-cover" />
          <div class="greeting" :class="{'no-cover': !coverUrl}">
            <h2>{{ $getTrans('smile') }}</h2>
            <p class="color">{{ $getTrans('you-about-to-be-on-camera') }} ;)</p>
            <div class="time-container">
              <p>{{ $getTrans('please-make-sure-you-have') }}</p>
              <span class="color">{{ `${totalDuration} ${$getTrans('minutes')}` }}</span>
              <p>{{ $getTrans('to-complete-the-interview') }}</p>
            </div>
          </div>
        </div>
      </div>
      <h3>{{ $getTrans('before-the-interview-we-need-to-know-you') }}</h3>
      <ApplicationIndex @dragenter="changeClass = false" />
      <form ref="form" novalidate @submit.prevent="validateForm" @dragenter="changeUploadBox" @dragleave="onDragleave">
        <p class="form-title">
          {{ $getTrans('fill-in-your-personal-details') }}
        </p>
        <div class="inputs">
          <div class="input-group">
            <MainInput
              v-model.trim="applicantInfo.fName"
              input-name="firstname"
              :label="$getTrans('first-name')"
              validate="required"
              :on-blur="validateField"
              :errors="errors"
              styled="main"
            />

            <MainInput
              v-model.trim="applicantInfo.lName"
              input-name="lastname"
              :label="$getTrans('last-name')"
              validate="required"
              :on-blur="validateField"
              :errors="errors"
              styled="main"
            />
          </div>

          <MainInput
            v-model.trim="applicantInfo.email"
            input-name="email"
            type="email"
            :label="$getTrans('email')"
            validate="required|email"
            :on-blur="validateField"
            :errors="errors"
            styled="main"
          />

          <MainInput
            v-model.trim="applicantInfo.hometown"
            input-name="hometown"
            :label="$getTrans('hometown')"
            validate="required"
            :on-blur="validateField"
            :errors="errors"
            styled="main"
          />

          <MainInput
            v-model.trim="applicantInfo.phone"
            input-name="phone"
            type="tel"
            :label="$getTrans('phone')"
            validate="required|phone"
            :on-blur="validateField"
            :errors="errors"
            styled="main"
          />

          <div :class="{disabled: !applicantInfo.fName || !applicantInfo.lName}">
            <CvUpload
              :errors="errors"
              :applicant-cv-name="applicantFullName"
              @uploaded="onCvUploaded"
              @uploadClick="toggleDrag"
            />
          </div>
        </div>
        <div class="btn-container">
          <button class="main-btn">{{ $getTrans('continue') }}</button>
          <span>{{ $getTrans('the-interview-will-not-start-yet') }}</span>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import {validate, getValidateMsg} from '@/services/errorService'

import {loggerService} from '@/services/loggerService'

import CvUpload from '../CvUpload.vue'
import ApplicationIndex from './ApplicationIndex.vue'

export default {
  components: {CvUpload, ApplicationIndex},
  emits: ['on-next-step'],
  data() {
    return {
      applicantInfo: {
        fName: '',
        lName: '',
        email: '',
        hometown: '',
        phone: '',
        cv: '',
      },
      errors: null,
      isDrag: false,
      changeClass: false,
      dragInsideFormCounter: 0,
    }
  },

  computed: {
    applicant() {
      return this.$store.getters['applicant/applicant']
    },

    job() {
      return this.$store.getters['applicant/job']
    },

    coverUrl() {
      return this.job.info.coverUrl
    },

    totalDuration() {
      return this.job.quests.reduce((acc, quest) => (acc += quest.timeLimit), 0)
    },

    applicantFullName() {
      // return this.$getFullName(this.applicantInfo)
      return this.$utilService.getFullName(this.applicantInfo)
    },

    isCvRequired() {
      return this.job.rule.isCvRequired
    },

    isPreview() {
      return this.$store.getters['applicant/isPreview']
    },
  },

  mounted() {
    this.$store.commit('applicant/setIsInvitationPage', {
      isInvitationPage: false,
    })
    loggerService.info('[onBoarding] [ApplicantForm] Mounted')
  },

  methods: {
    validateForm({target}) {
      this.errors = validate(target)
      if (this.isCvRequired && !this.applicantInfo.cv) {
        this.errors.push(getValidateMsg('REQUIRED', {name: 'cv'}))
      }
      if (this.errors.length) return
      this.saveApplicant()
      this.$emit('on-next-step')
    },

    onCvUploaded(cv) {
      this.errors = this.errors?.filter((err) => err.elName !== 'cv')
      this.applicantInfo.cv = cv.name
    },

    async saveApplicant() {
      if (this.isPreview) this.applicantInfo.isPreview = true
      const applicant = {
        ...this.applicant,
        info: {...this.applicantInfo},
      }
      this.$store.commit('applicant/setApplicant', {applicant})
    },

    validateField(ev) {
      if (!ev.target.form) return
      if (!this.errors) return
      this.errors = validate(ev.target.form)
    },

    changeUploadBox() {
      if (this.isDrag) {
        if (this.dragInsideFormCounter < 2) this.dragInsideFormCounter++
        this.changeClass = true
      }
    },

    onDragleave() {
      this.dragInsideFormCounter--
      if (this.dragInsideFormCounter === 0 && this.isDrag) {
        this.changeClass = false
      }
    },

    toggleDrag(isDrag) {
      this.isDrag = isDrag
      if (!isDrag) this.changeClass = isDrag
    },
  },
}
</script>
