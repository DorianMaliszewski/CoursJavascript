// components/RecursiveTree.tsx
import Link from "components/Link.tsx";
import React from "react";

export type NodeItem = {
  title: string;
  path: string;
  type?:string;
  items: NodeItem[];
};

type Props = {
  data: NodeItem[];
  /** optionnel : chemin courant pour ouvrir/mettre en évidence */
  currentPath?: string;
};

const isAncestorOf = (node: NodeItem, targetPath?: string): boolean => {
  if (!targetPath) return false;
  if (node.path === targetPath) return true;
  return node.items?.some((child) => isAncestorOf(child, targetPath));
};

export default function RecursiveTree({ data, currentPath }: Props) {
  return (
    <ul className="space-y-2 font-medium menu">
      {data.map((node) => (
        <TreeNode key={node.path} node={node} currentPath={currentPath} />
      ))}
    </ul>
  );
}
function TreeNode({
  node,
  currentPath,
}: {
  node: NodeItem;
  currentPath?: string;
}) {
  const hasChildren = node.items && node.items.length > 0;
  const open = hasChildren && isAncestorOf(node, currentPath);

  return (
    <li>
      {hasChildren ? (
        <details id={`d-${node.path}`} open={!!open ? true : undefined}>
          <summary>
              {node.title.replaceAll("_", " ").split(" ").map((t)=>t.charAt(0).toUpperCase().concat(t.slice(1))).join(" ")}          
          </summary>
          <ul>
            {node.items.sort((i, ii)=> i.type?.localeCompare(ii.type) ).map((child) => (
              <TreeNode
                key={child.path}
                node={child}
                currentPath={currentPath}
              />
            ))}
          </ul>
        </details>
      ) : (
        <Link type={node.type?.toUpperCase()} href={`/${node.path.replace('.md',"").replace('index', '')}`}>
          {node.title}
        </Link>
      )}
    </li>
  );
}
