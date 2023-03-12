<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
            Email:{{ usuario.email }}
            Senha:{{ usuario.senha }}
        </div>
        <Input
        label="E-mail"
        placeHolder="exemplo@gmail.com"
        v-model="usuario.email"
        >
        </Input>
        <Input
        label="Senha"
        placeHolder="123456"
        type="password"
        v-model="usuario.senha"
        >
        </Input>

        <Button 
        value="Entrar"
        :callback="login"
        >
        </Button>
        
    </div>
</template>

<script>
import Input from "@/components/input/Input.vue";
import Button from "@/components/button/Button.vue";

export default {
    name: "Login",
    components: {
        Input,
        Button
    },
    data() {
        return {
            usuario: {
                email:'',
                senha:''
            }
        }
    },
    methods:{
        login(){
            this.$router.push({name: 'Dashboard'})
        }
    }
}
</script>

<style scoped>
    .box-login{
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        margin-top: 70px;
        padding: 30px;
    }

    .logo{
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;
    }

    

</style>