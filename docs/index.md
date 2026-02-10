<script setup lang="ts">
    import { useRouter } from "vitepress";

    const router = useRouter();
    let onSite = false;

    if (onSite) {
        router.go("/home");
    }
    else {
        router.go("/merged");
    }
    
    onSite = true;
</script>