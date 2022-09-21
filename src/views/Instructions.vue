<template>
    <main class="main-wrapper">
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="instructions-wrapper">
          <h1>Instructions</h1>
          <p>
            The goal for you as a participant is, to answer the following trials as fast and correctly as 
            possible. Your response time and accuracy are measured.
            The experiment contains XX trials. <br> <br>
            You must decide between two lines, which consist of letters, numbers as symbols or numbers 
            as words. Which kind of lines you see is randomly chosen. Please choose the answer with the 
            most elements. To choose a line, you can click at the picture. Below you can see an example 
            for every kind of trial. The correct answer is outlined.
          </p>
        </div>
        <div class="multiple-checkbox-wrapper">
            <div class="checkbox-wrapper">
                <Checkbox id="read_accept" name="read_accept" value="Read_accept" v-model="v$.read_accept.$model" :class="{'p-invalid':v$.read_accept.$invalid && submitted}" />
                <label for="read_accept" class="checkbox-label" :class="{'p-error': v$.read_accept.$invalid && submitted}">I can read the examples</label>
            </div>
            <div class="checkbox-wrapper">
                <Checkbox id="understand_accept" name="understand_accept" value="Understand_accept" v-model="v$.understand_accept.$model" :class="{'p-invalid':v$.understand_accept.$invalid && submitted}" />
                <label for="understand_accept" class="checkbox-label" :class="{'p-error': v$.understand_accept.$invalid && submitted}">I understand what to do and want to continue</label>
            </div>
        </div>
        <div class="button-wrapper">
          <Button type="submit" label="Next" class="mt-2"></Button>
        </div>
      </form>
    </main>
  </template>
  
  <script>
    import { useVuelidate } from "@vuelidate/core";
    import { required } from '@vuelidate/validators';
  
    import Button from 'primevue/button'
    import Checkbox from 'primevue/checkbox'
  
    export default {
      name: 'Instructions',
      components: {
        Button,
        Checkbox
      },
      setup: () => ({ v$: useVuelidate()}),
      data() {
        return {
          read_accept: null,
          understand_accept: null,
          submitted: false
        }
      },
      validations() {
          return {
            read_accept: {
              required
            },
            understand_accept: {
                required
            }
          }
      },
      methods: {
        handleSubmit(isFormValid) {
          this.submitted = true;
          if (!isFormValid) {
            return;
          } else {
            this.$router.push("letters0");
          }
        }
      }
    }
  </script>
  
  <style>
    html {
      background-color: #fbfbfb;
    }
  
    html p {
      font-size: 18px;
    }
      
    .main-wrapper {
      max-width: 600px;
      margin: 32px auto;
    }
  
    .button-wrapper {
      display: flex;
      flex: 1;
      justify-content: center;
    }
  
    .mt-2 {
      font-size: 16px;
      width: 100%;
    }
  
    .instructions-wrapper {
      margin-bottom: 24px;
    }

    .multiple-checkbox-wrapper {
        margin-bottom: 24px;
    }
  
    .checkbox-wrapper {
      line-height: 100%;
      margin-bottom: 8px;
    }
  
    .checkbox-label {
      margin-left: 6px;
    }
  
  </style>
  