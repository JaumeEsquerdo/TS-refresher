# Más ejemplos

## 🧾 Generic List Component

👉 Qué enseña:

Cómo crear un componente genérico y reutilizable para renderizar listas de cualquier tipo de datos.

Uso:

```js
<List
  items={users}
  renderItem={(user) => <li key={user.id}>{user.name}</li>}
/>

<List
  items={hobbies}
  renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
/>
```

🧠 Tipado:

```js
type ListProps<T> = {
  items: T[],
  renderItem: (item: T) => React.ReactNode,
};

const List = <T>({ items, renderItem }: ListProps<T>) => (
  <ul>{items.map(renderItem)}</ul>
);
```

💥 Clave:

<T,> define que el componente es genérico, y que T se infiere según el tipo de items.

TypeScript te protege: si items es un array de User, renderItem debe recibir un User.
