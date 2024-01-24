// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ZK3Ka3GLBNfX7wb1NZz6y
// Component: 3DHGFMCCchpq

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Nav from "../../Nav"; // plasmic-import: M7FSrNvh01Bb/component
import Logo from "../../Logo"; // plasmic-import: x-WUVb1UdtEk/component
import AuthButton from "../../AuthButton"; // plasmic-import: 1JFfF43ycoS1/component
import Footer from "../../Footer"; // plasmic-import: MdFayujW6N0n/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alpha.module.css"; // plasmic-import: ZK3Ka3GLBNfX7wb1NZz6y/projectcss
import sty from "./PlasmicDefaultLayout.module.css"; // plasmic-import: 3DHGFMCCchpq/css

createPlasmicElementProxy;

export type PlasmicDefaultLayout__VariantMembers = {};
export type PlasmicDefaultLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicDefaultLayout__VariantsArgs;
export const PlasmicDefaultLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicDefaultLayout__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDefaultLayout__ArgsType;
export const PlasmicDefaultLayout__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicDefaultLayout__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
};

export interface DefaultDefaultLayoutProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDefaultLayout__RenderFunc(props: {
  variants: PlasmicDefaultLayout__VariantsArgs;
  args: PlasmicDefaultLayout__ArgsType;
  overrides: PlasmicDefaultLayout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Nav className={classNames("__wab_instance", sty.nav__xvtfw)} />
        ),

        value: args.children
      })}
      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__vFpq1
              )}
            >
              {"Welcome!"}
            </h1>
          ),
          value: args.slot
        })}
      </section>
      {p.renderPlasmicSlot({
        defaultContents: (
          <Footer className={classNames("__wab_instance", sty.footer__ihCf)} />
        ),

        value: args.slot2
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section"],
  section: ["section"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDefaultLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDefaultLayout__VariantsArgs;
    args?: PlasmicDefaultLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDefaultLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDefaultLayout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDefaultLayout__ArgProps,
          internalVariantPropNames: PlasmicDefaultLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDefaultLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDefaultLayout";
  } else {
    func.displayName = `PlasmicDefaultLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicDefaultLayout = Object.assign(
  // Top-level PlasmicDefaultLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicDefaultLayout
    internalVariantProps: PlasmicDefaultLayout__VariantProps,
    internalArgProps: PlasmicDefaultLayout__ArgProps
  }
);

export default PlasmicDefaultLayout;
/* prettier-ignore-end */