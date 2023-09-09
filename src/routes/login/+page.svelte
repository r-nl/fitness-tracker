<script lang="ts">
	import { Block, Button, Card, List, ListInput } from 'konsta/svelte';
    let username: string;
    let password: string;

    function login() {

    }
</script>

<Block class="flex justify-center">
	<Card class="w-full sm:w-96">
        <div class="text-xl">Login</div>
        <List>
            <ListInput
                label="Username"
                type="text"
                placeholder="Username"
                onChange={(changeEvent) => {
                    username = changeEvent.target.value;
                }}
            />
            <ListInput
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(changeEvent) => {
                    password = changeEvent.target.value;
                }}
            />
        </List>
        <Block>
            <Button onClick={login}>Login</Button>
        </Block>
    </Card>
</Block>
