<script setup lang="ts">
import { useRouter } from "vitepress"

const router = useRouter()

if (window.visit == "true") {
    router.go("/home");
}
else {
    router.go("/merged");
}

window.visit = "true";

</script>