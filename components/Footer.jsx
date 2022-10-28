export default function Footer(props) {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-gray-900 pt-12">
      <div className="flex flex-col justify-center align-center text-neutral-500 contrast-more:text-neutral-200 text-center py-5">
        <div className="mb-3">
          Built by Adam Isaak
        </div>
        <div className="flex justify-center align-center space-x-3">
          {props.accounts.map((account) => (
            <a href={account.url} target="_blank" title={account.name} key={account.name}>
              {account.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}