import { ref,computed,watch } from "vue";
export default function useSearch() {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableUsers = computed(function () {
      let users = [];
      if (activeSearchTerm.value) {
        users = props.users.filter((usr) =>
          usr.fullName.includes(activeSearchTerm.value)
        );
      } else if (props.users) {
        users = props.users;
      }
      return users;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }
}