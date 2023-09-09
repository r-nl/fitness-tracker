<script lang="ts">
	import { Block, Button, Card, List, ListInput } from 'konsta/svelte';
    let newUsername: string;
    let newPassword: string;

    function registerNewUser() {

    }
</script>

<Block class="flex justify-center">
	<Card class="w-full sm:w-96">
        <div class="text-xl">Register</div>
        <List>
            <ListInput
                label="Username"
                type="text"
                placeholder="Username"
                onChange={(changeEvent) => {
                    newUsername = changeEvent.target.value;
                }}
            />
            <ListInput
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(changeEvent) => {
                    newPassword = changeEvent.target.value;
                }}
            />
            <ListInput
                label="Confirm Password"
                type="password"
                placeholder="Retype Password"
                onChange={(changeEvent) => {
                    newPassword = changeEvent.target.value;
                }}
            />
        </List>
        <Block>
            <Button onClick={registerNewUser}>Register</Button>
        </Block>
    </Card>
</Block>
