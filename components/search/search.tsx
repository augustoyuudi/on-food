import { Menu } from '@headlessui/react';
import Styles from './search.module.css';
import { IconFilter } from '@/icons';
import { ItemLink } from './item-link';

export function Search() {
  return (
    <Menu as="div" className={Styles.search}>
      <Menu.Button>
        Selecione uma cidade iniciar
        <span>
          <IconFilter />
        </span>
      </Menu.Button>
      <Menu.Items className={Styles.options}>
        <div>
          <Menu.Item>
            <ItemLink href="/descobrir/sao-paulo-sp">São Paulo, SP</ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/descobrir/florianopolis-sc">Florianópolis, SC</ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/descobrir/porto-alegre-rs">Porto Alegre, RS</ItemLink>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
