// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ZK3Ka3GLBNfX7wb1NZz6y
// Component: TWQYn6j8yiF4

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
import TextInput from "../../TextInput"; // plasmic-import: XYhhZFiAgFz8/component
import Button from "../../Button"; // plasmic-import: nxKBKvpVYc_r/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alpha.module.css"; // plasmic-import: ZK3Ka3GLBNfX7wb1NZz6y/projectcss
import sty from "./PlasmicAuth.module.css"; // plasmic-import: TWQYn6j8yiF4/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: nELg4fSiunnW/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: lixJ7oSuiNeq/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZwlhKNz16ciL/icon

createPlasmicElementProxy;

export type PlasmicAuth__VariantMembers = {
  isSignUpFlow: "isSignUpFlow";
  isLoading: "isLoading";
};
export type PlasmicAuth__VariantsArgs = {
  isSignUpFlow?: SingleBooleanChoiceArg<"isSignUpFlow">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
};
type VariantPropType = keyof PlasmicAuth__VariantsArgs;
export const PlasmicAuth__VariantProps = new Array<VariantPropType>(
  "isSignUpFlow",
  "isLoading"
);

export type PlasmicAuth__ArgsType = {
  errorMessage?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAuth__ArgsType;
export const PlasmicAuth__ArgProps = new Array<ArgPropType>("errorMessage");

export type PlasmicAuth__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  emailInput?: p.Flex<typeof TextInput>;
  passwordInput?: p.Flex<typeof TextInput>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  submitButton?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultAuthProps {
  errorMessage?: React.ReactNode;
  isSignUpFlow?: SingleBooleanChoiceArg<"isSignUpFlow">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuth__RenderFunc(props: {
  variants: PlasmicAuth__VariantsArgs;
  args: PlasmicAuth__ArgsType;
  overrides: PlasmicAuth__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "isSignUpFlow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSignUpFlow
      },
      {
        path: "isLoading",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isLoading
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisLoading]: hasVariant($state, "isLoading", "isLoading"),
          [sty.rootisSignUpFlow]: hasVariant(
            $state,
            "isSignUpFlow",
            "isSignUpFlow"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Error Message Here",
          value: args.errorMessage,
          className: classNames(sty.slotTargetErrorMessage, {
            [sty.slotTargetErrorMessageisLoading]: hasVariant(
              $state,
              "isLoading",
              "isLoading"
            ),
            [sty.slotTargetErrorMessageisSignUpFlow]: hasVariant(
              $state,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })
        })}
      </div>
      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput, {
          [sty.emailInputisLoading]: hasVariant(
            $state,
            "isLoading",
            "isLoading"
          )
        })}
        onChange={(...eventArgs) => {
          p.generateStateOnChangeProp($state, ["emailInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        value={p.generateStateValueProp($state, ["emailInput", "value"]) ?? ""}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        onChange={(...eventArgs) => {
          p.generateStateOnChangeProp($state, ["passwordInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        type={"password"}
        value={
          p.generateStateValueProp($state, ["passwordInput", "value"]) ?? ""
        }
      />

      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link,
          {
            [sty.linkisSignUpFlow]: hasVariant(
              $state,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          }
        )}
        component={Link}
        href={
          hasVariant($state, "isSignUpFlow", "isSignUpFlow")
            ? `/login`
            : `/sign-up`
        }
        platform={"nextjs"}
      >
        {hasVariant($state, "isSignUpFlow", "isSignUpFlow")
          ? "Already have an account? Login!"
          : "Need an account? Sign Up!"}
      </p.PlasmicLink>
      <Button
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton, {
          [sty.submitButtonisLoading]: hasVariant(
            $state,
            "isLoading",
            "isLoading"
          )
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textisLoading]: hasVariant($state, "isLoading", "isLoading")
            }
          )}
        >
          {hasVariant($state, "isLoading", "isLoading")
            ? "Loading..."
            : "Sign In"}
        </div>
      </Button>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "emailInput",
    "passwordInput",
    "link",
    "submitButton",
    "text"
  ],
  freeBox: ["freeBox"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  link: ["link"],
  submitButton: ["submitButton", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  emailInput: typeof TextInput;
  passwordInput: typeof TextInput;
  link: "a";
  submitButton: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuth__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuth__VariantsArgs;
    args?: PlasmicAuth__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuth__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuth__ArgsType,
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
          internalArgPropNames: PlasmicAuth__ArgProps,
          internalVariantPropNames: PlasmicAuth__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuth__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuth";
  } else {
    func.displayName = `PlasmicAuth.${nodeName}`;
  }
  return func;
}

export const PlasmicAuth = Object.assign(
  // Top-level PlasmicAuth renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    link: makeNodeComponent("link"),
    submitButton: makeNodeComponent("submitButton"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicAuth
    internalVariantProps: PlasmicAuth__VariantProps,
    internalArgProps: PlasmicAuth__ArgProps
  }
);

export default PlasmicAuth;
/* prettier-ignore-end */
