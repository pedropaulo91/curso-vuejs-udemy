<template>
    <div class="card">
        
        <img src="data:image/jpeg;base64,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" 
            alt=""
        >

        <h4>
            <slot name="nome"></slot>
        </h4>

        <p class="valor">
            <slot name="valor"></slot>
        </p>

        <p>
            <slot name="observacao"></slot>
        </p>

        <div>
            <slot name="acoes"></slot>
            
        </div>

    </div>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return {

            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        max-width: 270px;
        margin: 5px;
        margin-bottom: 15px;
        text-align: center;
        padding: 10px;
    }
    .valor {
        color: grey;
        font-size: 22px;
    }
    .icones-tabela{
        margin: 5px;
        cursor: pointer; 
        color: var(--cor-primaria);
    }

</style>