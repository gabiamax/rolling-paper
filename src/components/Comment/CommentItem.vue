<template>
  <li class="comment__item">
    <div class="comment__item--author">{{ comment.attributes.author }}</div>
    <div class="comment__item--content">{{ comment.attributes.content }}</div>
    <div class="comment__item--delete">
      <DeleteIcon @click="deleteComment" />
    </div>
  </li>
</template>

<script>
import DeleteIcon from '../../assets/icons/delete.svg';

export default {
  components: {
    DeleteIcon,
  },
  props: {
    comment: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteComment() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped lang="scss">
.comment__item {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  background-color: #f2f3f5;
  &--author {
    width: 80px;
    font-weight: 600;
    margin: 1rem;
  }

  &--content {
    flex-grow: 1;
    max-width: 530px;
  }

  &--delete {
    display: flex;
    cursor: pointer;
    width: 50px;
    align-items: center;
    justify-content: center;

    svg {
      &:hover {
        fill: red;
      }
    }
  }
}
</style>
